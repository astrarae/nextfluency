import { Clipboard, IconButton } from "@chakra-ui/react"


export default function CopyButton({content}){
  return (
    <Clipboard.Root value={content} border="none" >
      <Clipboard.Trigger  asChild bgColor="transparent" border="none" boxShadow="none">
        <IconButton variant="surface" transform="scale(1.2)" color="white" size="xs">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}