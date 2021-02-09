export default function prefixLeadingCharacter(str) {
  return str.replace(/^([\da-z])/i, 'sc-$1')
}
