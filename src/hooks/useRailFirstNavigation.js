import { useEffect } from 'react';
import { getCurrentFocusKey, setFocus } from '@noriginmedia/norigin-spatial-navigation';

/**
 * Custom hook for rail-first navigation
 * Prevents default UP/DOWN navigation and directly focuses the first card of the target row
 */
export const useRailFirstNavigation = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Only handle UP and DOWN arrows
            if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
                return;
            }

            const currentFocusKey = getCurrentFocusKey();

            // Check if we're on a content card (format: rowId-card-index)
            if (!currentFocusKey || !currentFocusKey.includes('-card-')) {
                return;
            }

            // Prevent the default spatial navigation for vertical movement
            event.preventDefault();
            event.stopPropagation();

            // Parse current position
            const [currentRowId] = currentFocusKey.split('-card-');

            // Get all content cards to find adjacent rows
            const allCards = document.querySelectorAll('[data-focusable="true"]');
            const cardElements = Array.from(allCards).filter(el => {
                const key = el.getAttribute('data-focus-key') || el.id;
                return key && key.includes('-card-');
            });

            // Find current card element
            const currentCard = Array.from(allCards).find(el => {
                const key = el.getAttribute('data-focus-key') || el.id;
                return key === currentFocusKey;
            });

            if (!currentCard) return;

            // Get current card position
            const currentRect = currentCard.getBoundingClientRect();
            const currentY = currentRect.top + currentRect.height / 2;

            // Find cards in the target direction
            const targetCards = cardElements.filter(el => {
                const rect = el.getBoundingClientRect();
                const cardY = rect.top + rect.height / 2;

                if (event.key === 'ArrowDown') {
                    return cardY > currentY + 10; // Cards below (with small threshold)
                } else {
                    return cardY < currentY - 10; // Cards above (with small threshold)
                }
            });

            if (targetCards.length === 0) return;

            // Sort by distance and get the closest row
            targetCards.sort((a, b) => {
                const aRect = a.getBoundingClientRect();
                const bRect = b.getBoundingClientRect();
                const aY = Math.abs(aRect.top + aRect.height / 2 - currentY);
                const bY = Math.abs(bRect.top + bRect.height / 2 - currentY);
                return aY - bY;
            });

            // Get the focus key of the nearest card in the target direction
            const nearestCard = targetCards[0];
            const nearestKey = nearestCard.getAttribute('data-focus-key') || nearestCard.id;

            if (!nearestKey || !nearestKey.includes('-card-')) return;

            // Extract the target row ID
            const [targetRowId] = nearestKey.split('-card-');

            // Focus the first card of the target row
            if (targetRowId !== currentRowId) {
                setFocus(`${targetRowId}-card-0`);
            }
        };

        // Add listener with capture phase to intercept before library processes
        window.addEventListener('keydown', handleKeyDown, true);

        return () => {
            window.removeEventListener('keydown', handleKeyDown, true);
        };
    }, []);
};
