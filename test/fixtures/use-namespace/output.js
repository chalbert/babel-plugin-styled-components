import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "sc-code__Test",
  componentId: "test-namespace__sc-3rfj0a-0"
})(["color:red;"]);
const before = styled.div.withConfig({
  displayName: "sc-code__before",
  componentId: "test-namespace__sc-3rfj0a-1"
})(["color:blue;"]);
styled.div.withConfig({
  displayName: "sc-code",
  componentId: "test-namespace__sc-3rfj0a-2"
})([""]);
export default styled.button.withConfig({
  displayName: "sc-code",
  componentId: "test-namespace__sc-3rfj0a-3"
})([""]);
