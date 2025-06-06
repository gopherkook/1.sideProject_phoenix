import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
</>
`;
const textAreaCode = `
<>
  <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>
`;
const selectsCode = `
<FloatingLabel controlId="floatingSelect" label="Works with selects">
  <Form.Select aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
</FloatingLabel>
`;
const layoutCode = `
<Row className="g-2">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Email address">
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>
`;

const customizingRenderCode = `
<>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>
</>
`;

const validationCode = `
<>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputInvalid"
      type="email"
      defaultValue="name"
      isInvalid
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingInputValid"
      type="email"
      defaultValue="name@example.com"
      isValid
    />
    <label htmlFor="floatingPasswordCustom">Email address</label>
  </Form.Floating>
</>
`;

const FloatingLabelExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Floating labels"
        description="Create beautifully simple form labels that float over your input fields."
        link={{
          text: 'Floating labels on react-bootstrap',
          url: `${
            import.meta.env.VITE_RB_URL_PREFIX || ''
          }/forms/floating-labels/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Wrap a <code>&lt;Form.Control&gt;</code> element in{' '}
              <code>&lt;FloatingLabel&gt;</code> to enable floating labels with
              Bootstrap’s textual form fields. A <code>placeholder</code> is
              required on each <code>&lt;Form.Control&gt;</code> as our method
              of CSS-only floating labels uses the{' '}
              <code>:placeholder-shown</code> pseudo-element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Textareas">
            <p className="mb-0">
              By default, <code>&lt;textarea&gt;</code>s will be the same height
              as <code>&lt;input&gt;</code>s. To set a custom height on your{' '}
              <code>&lt;textarea&gt;</code>, do not use the <code>rows</code>{' '}
              attribute. Instead, set an explicit <code>height</code> (either
              inline or via custom CSS).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textAreaCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Selects">
            <p className="mb-0">
              Other than <code>&lt;Form.Control&gt;</code>, floating labels are
              only available on <code>&lt;Form.Select&gt;</code>s. They work in
              the same way, but unlike <code>&lt;input&gt;</code>s, they’ll
              always show the <code>&lt;label&gt;</code>
              in its floated state.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={selectsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Layout"
            description="When working with the Bootstrap grid system, be sure to place form elements within column classes."
          />
          <PhoenixDocCard.Body code={layoutCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Customizing rendering"
            description="When working with the Bootstrap grid system, be sure to place form elements within column classes."
          >
            <p className="mb-0">
              If you need greater control over the rendering, use the{' '}
              <code>&lt;FormFloating&gt;</code> component to wrap your input and
              label. Also note that the <code>&lt;Form.Control&gt;</code> must
              come first so we can utilize a sibling selector (e.g., ~).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={customizingRenderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Validation">
            <p className="mb-0">
              Use <code>isValid</code> or <code>isInvalid</code> props for
              validation.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={validationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FloatingLabelExample;
