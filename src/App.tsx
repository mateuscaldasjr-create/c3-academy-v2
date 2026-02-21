<main className="flex-1 overflow-y-auto p-4 md:p-8">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {activeTab === 'dashboard' && <BusinessManager />}
      {activeTab === 'cave-mode' && <CaveMode />}
      {activeTab === 'rituals' && <RitualsTracker />}
      {activeTab === 'faith' && <FaithRituals />}
      {activeTab === 'business' && <BusinessManager />}
      {activeTab === 'community' && <Community />}
      {activeTab === 'settings' && <Settings />}
    </motion.div>
  </AnimatePresence>
</main>
