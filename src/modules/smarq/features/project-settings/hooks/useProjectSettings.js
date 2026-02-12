/** Dummy hook – project settings */

import { useState, useCallback } from "react";

export function useProjectSettings(projectId) {
  const [settings, setSettings] = useState({});
  const [saving, setSaving] = useState(false);

  const saveSettings = useCallback(async (updates) => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 500));
    setSettings((s) => ({ ...s, ...updates }));
    setSaving(false);
  }, []);

  return { settings, saving, saveSettings };
}
