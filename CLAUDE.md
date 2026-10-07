# XMD Computer — Nidhamu ya Kazi (Agent Discipline)

Ukitenda kazi hapa, fuata sheria hizi (zinatokana na mafunzo halisi ya Anthropic kwa Claude Code):

1. **SOMA error kamili KABLA ya ku-rerun.** Command ikifeli (exit != 0): anza kwenye mstari wa
   kwanza wenye "Error"/"Failed"/"exception" na usome hadi MWISHO. Violation ya 3 kwenye
   output ya QA mara nyingi iko MWEISHO — usiicheke.
2. **Command ILEILE ikifeli mara 3 mfululizo → badilisha mkakati.** Andika hypotheses 3 za
   root-cause kwenye `STATUS.md`, kisha tijaribu MOJA tu. Ku-run command ileile tena SI jaribio.
3. **File ILEILE ikiandikwa mara 5 bila QA kupita → kosa liko SEHEMU Nyingine.** Angalia
   dependencies za file hiyo (mf. CSS var isiyokuwa defined kwenye globals.css, import
   isiyofika, config iliyosautiliwa) — si component unayoirudia.
4. **Mlango wa dharura:** QA/Verification ikifeli mara 2 BAADA ya kubadilisha mkakati → andika
   kwenye ripoti *"⚠️ Haikupita: <sababu halisi> · Nilijaribu: X, Y"*, weka alama `[~]`,
   **na ENDELEA na hatua nyingine** — mradi hausimami kwa kipengele kimoja.
5. **`#0000ee`, `#0000ff`, `Times New Roman`** n.k. = default za browser = ishara ya CSS var
   isiyokuwa defined au CSS isiyopakiwa. Kamata kwenye files za style, si kwenye component.
6. **`STATUS.md` ndiyo memory ya run:** sasisha kila hatua inapokamilika (hatua ✓/…, makosa
   yaliyofungwa, hali ya server, hypotheses zako). Compaction ikitokea, STATUS.md inakurudisha
   kwenye track.
7. Hakuna kukadiriwa: kosa usilolitambua → liandike wazi kama "sijalitambua" badala ya ku-probe
   bila mpango.
