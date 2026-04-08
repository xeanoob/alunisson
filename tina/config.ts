import { defineConfig } from "tinacms";

// Configuration for Alunisson CMS
export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "d515c47b-7442-42e3-9bc2-b087f369bf5b",
  token: process.env.TINA_TOKEN || "96331a6f81b7f02ad13f51a94b8a38e655e7fa79",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre interne de la page",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Section Hero (Haut de page)",
            fields: [
              { type: "string", name: "title", label: "Titre principal" },
              { type: "string", name: "italicTitle", label: "Titre en italique" },
              { type: "string", name: "description", label: "Description / Sous-titre", ui: { component: "textarea" } },
              { type: "string", name: "buttonPrimary", label: "Bouton principal (texte)" },
              { type: "string", name: "buttonSecondary", label: "Bouton secondaire (texte)" },
              { type: "image", name: "image", label: "Image de fond (optionnel)" },
            ],
          },
          {
            type: "object",
            name: "welcome",
            label: "Section Bienvenue / Introduction",
            fields: [
              { type: "string", name: "text", label: "Texte d'introduction", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "bandeau",
            label: "Bandeau Photo (milieu de page)",
            fields: [
              { type: "image", name: "image", label: "Image de fond" },
              { type: "string", name: "title", label: "Texte principal" },
              { type: "string", name: "subtitle", label: "Sous-texte" },
            ],
          },
          {
            type: "object",
            name: "location",
            label: "Section Lieu / Où nous trouver",
            fields: [
              { type: "image", name: "image", label: "Photo du lieu" },
              { type: "string", name: "title", label: "Titre", ui: { component: "textarea" } },
              { type: "string", name: "text", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "sections",
            label: "Sections de la page",
            templates: [
              // Template pour les ateliers (Ateliers / Initiations)
              {
                name: "workshopBlock",
                label: "Bloc Atelier / Service",
                fields: [
                  { type: "string", name: "title", label: "Titre" },
                  { type: "string", name: "subtitle", label: "Sous-titre" },
                  { type: "string", name: "priceTag", label: "Etiquette prix / info" },
                  { type: "string", name: "priceSub", label: "Petit texte prix" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", list: true, name: "features", label: "Points forts / Détails" },
                  { type: "image", name: "image", label: "Image d'illustration" },
                  { type: "string", name: "buttonText", label: "Texte du bouton" },
                  { type: "string", name: "buttonLink", label: "Lien du bouton" },
                ],
              },
              // Template pour les valeurs / FAQ / Grilles
              {
                name: "gridSection",
                label: "Section Grille (Valeurs / FAQ / Infos)",
                fields: [
                  { type: "string", name: "title", label: "Titre de la section" },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Éléments de la grille",
                    ui: { itemProps: (item) => ({ label: item?.title || "Nouvel élément" }) },
                    fields: [
                      { type: "string", name: "title", label: "Titre" },
                      { type: "string", name: "text", label: "Texte", ui: { component: "textarea" } },
                      { type: "string", name: "label", label: "Petit label (ex: PROJET 01)" },
                      { type: "image", name: "image", label: "Image (optionnel)" },
                    ],
                  },
                ],
              },
              // Template de texte riche simple (Mentions légales / Histoire)
              {
                name: "richTextSection",
                label: "Section de Texte Riche",
                fields: [
                  { type: "rich-text", name: "body", label: "Contenu" },
                ],
              },
              // Template Photo Polaroid / Equipe
              {
                name: "polaroidBlock",
                label: "Bloc Photo / Polaroid",
                fields: [
                  { type: "image", name: "image", label: "Photo" },
                  { type: "string", name: "caption", label: "Légende" },
                ],
              },
              // Template Galerie de Créations
              {
                name: "gallerySection",
                label: "Galerie d'images",
                fields: [
                  { type: "string", name: "title", label: "Titre de la galerie" },
                  {
                    type: "object",
                    list: true,
                    name: "images",
                    label: "Images de la galerie",
                    ui: { itemProps: (item) => ({ label: item?.alt || "Nouvelle image" }) },
                    fields: [
                      { type: "image", name: "src", label: "Image" },
                      { type: "string", name: "alt", label: "Titre / Légende" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
