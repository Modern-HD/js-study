'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function PageMotionWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
