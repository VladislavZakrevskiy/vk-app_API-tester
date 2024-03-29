import {create} from 'zustand'

export enum Sections {
    QUERY = 'query',
    BODY = 'body',
    MAIN = 'main'
}

interface PanelSectionsItems {
    currentSection: Sections
}

interface PanelSectionsActions {
    setCurrentSection: (section: Sections) => void
} 

type PanelSectionsStore = PanelSectionsActions & PanelSectionsItems

export const usePanelSectionsStore = create<PanelSectionsStore>((set) => ({
    currentSection: Sections.MAIN,
    setCurrentSection: (section) => set(() => ({currentSection: section})) 
}))
