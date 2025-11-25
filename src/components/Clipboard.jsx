import { Clipboard, IconButton } from "@chakra-ui/react"
import { useTheme } from '@/store'

export default function CopyButton({content}){
  const { theme } = useTheme();
  return (
    <Clipboard.Root value={content} border="none" >
      <Clipboard.Trigger  asChild bgColor="transparent" border="none" boxShadow="none">
        <IconButton variant="surface" transform="scale(1.2)" color={theme.textColor} size="xs">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}