-- Gives each page a clean browser-tab title.
-- A title like "[Om mig]{.sv}[About]{.en}" would otherwise become "Om migAbout".
-- This keeps only the Swedish part. language.html switches it to English
-- when a visitor chooses English.

function Meta(meta)
  if meta.title and not meta.pagetitle then
    local swedish = pandoc.Inlines(meta.title):walk({
      Span = function(span)
        if span.classes:includes("en") then
          return {}
        end
      end
    })
    meta.pagetitle = pandoc.utils.stringify(swedish)
  end
  return meta
end
