/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from 'react';
import { driver, Driver, DriveStep } from 'driver.js';
import { useLanguage } from '@/context/LanguageContext';
import './driver-theme.css';

export function useProfileTour(
  activeSection: string,
  setActiveSection: (sectionId: string) => void
) {
  const { dict } = useLanguage();

  const startTour = useCallback(() => {
    if (activeSection !== 'specialties') {
      setActiveSection('specialties');
    }

    const driveSteps: DriveStep[] = dict.tourSteps.map((stepMeta) => ({
      element: stepMeta.element,
      waitForElement: 2500,
      popover: {
        title: stepMeta.title,
        description: stepMeta.description,
        side: stepMeta.side,
        align: stepMeta.align,
        popoverClass: 'cyber-hud-popover',
      },
    }));

    const stepTo = (delta: 1 | -1, opts: { index?: number; driver: Driver }) => {
      const curIdx = opts.index ?? 0;
      const target = dict.tourSteps[curIdx + delta];
      if (!target) {
        if (delta === 1) opts.driver.destroy();
        return;
      }
      const move = () => (delta === 1 ? opts.driver.moveNext() : opts.driver.movePrevious());
      if (target.sectionId !== dict.tourSteps[curIdx]?.sectionId) {
        setActiveSection(target.sectionId);
        setTimeout(move, 280);
      } else {
        move();
      }
    };

    const driverObj = driver({
      animate: true,
      duration: 350,
      overlayColor: '#05060A',
      overlayOpacity: 0.82,
      stagePadding: 8,
      stageRadius: 4,
      allowClose: true,
      showProgress: true,
      progressText: dict.tourUi.progress,
      nextBtnText: dict.tourUi.next,
      prevBtnText: dict.tourUi.prev,
      doneBtnText: dict.tourUi.done,
      steps: driveSteps,
      onNextClick: (_el, _step, opts) => stepTo(1, opts),
      onPrevClick: (_el, _step, opts) => stepTo(-1, opts),
    });

    setTimeout(() => {
      driverObj.drive(0);
    }, 120);
  }, [activeSection, setActiveSection, dict]);

  return { startTour };
}
