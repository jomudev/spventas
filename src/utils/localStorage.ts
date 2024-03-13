import { projectData } from "@/config/projectData";
import { keyGenerator } from "./keyGenerator"

export const setItem = (data: any, id: string) => {
  data = JSON.stringify(data);
  localStorage.setItem(`${keyGenerator()}-${projectData.name}-${id}`, data);
}

export const getItem = (itemId: string) => {
  const item = localStorage.getItem(itemId);
  if (!item) throw new Error(`Problemas al recuperar datos locales de ${itemId}, la operación retornó con valor "${item}"`);
  return JSON.parse(item);
}

export const getAllItems = () => {
  return Object.keys(localStorage).filter((key) => key.includes(projectData.name));
}

export const getAllItemsFrom = (id: string): string[] => {
  return Object.keys(localStorage).filter((key) => key.includes(projectData.name)).filter((key) => key.includes(id));
}