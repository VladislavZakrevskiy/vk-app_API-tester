import { create } from 'zustand'

export enum BodySections {
    JSON = 'json',
    FORM = 'form'
}

type BodySectionState = {
    currentSection: BodySections
}

type BodySectionAction = {
    setCurrentSection: (section: BodySections) => void
}

export const useBodySectionStore = create<BodySectionState & BodySectionAction>((set) => ({
    currentSection: BodySections.JSON,
    setCurrentSection: (section) => set(() => ({currentSection: section}))
}))
