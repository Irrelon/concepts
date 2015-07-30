# Schnittstelle RESYS - EIS

* Klären Kredit (Konten) IDs => VE-Nummer-Kreditnummer
* Defininieren Key `<div class="cmt"id="701-E1300.0001">`
* 1 Datei pro Verwaltungeinheit und Sprache (3 Mal 71 Dateien)
* File Namen: begr-701-&lt;yyyy&gt;-&lt;mm&gt;-&lt;dd&gt;-de.html. Sprachen: de, fr, it. Ausgabe: Voranschlag va, Rechnung rg, Namensschema: &lt;va|rg&gt;&lt;yy&gt;-begr-&lt;verwaltungseinheitnummer&gt;-&lt;sprache>.html 

## CSS Classes

      cmt = commentary => 
      amtnr = Amt Nr => Verwaltungseinheit Nummer, venr
      amt = Amt => Verwaltungseinheit
      br = Buchungsrubrik
      ktogrpN = Kontogruppe N => Kreditgruppe
       z.B. ktogr1, ktogr2,...
      
      ktoln = Konto Line => Kredit Line
      ktonr = Konto Nummer => Kredit Nummer
      kton = Konto Name => Kredit Name
      ktobtr = Konto Betrag => Kredit Betrag
      cmtdsc = Commentary description 
      detail, dtln = Detail
      detailbtr = Detail Betrag
