import Typography, { TypographyProps } from "@mui/material/Typography";


export type NoteTextProps = Omit<TypographyProps<'p'>, 'variant' | 'component'>

export function NoteText(props: NoteTextProps) {
    return <Typography variant="narrative" component="p" {...props} />
}

export function LeadText(props: NoteTextProps): React.ReactElement {
  return <Typography variant="lead" component="p" {...props} />;
}

export function FinePrint(props: NoteTextProps): React.ReactElement {
  return <Typography variant="finePrint" component="p" {...props} />;
}