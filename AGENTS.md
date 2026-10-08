<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep shared SSI Pharma navigation and footer in a shared site module, with separate home and portfolio routes, so both pages stay consistent.
- Store supplied product content in a browser-safe data module and derive counts from the actual rows to avoid catalogue discrepancies.
- Enquiries prepare an email draft to the supplied contact rather than claiming delivery, because no submission service is configured.
