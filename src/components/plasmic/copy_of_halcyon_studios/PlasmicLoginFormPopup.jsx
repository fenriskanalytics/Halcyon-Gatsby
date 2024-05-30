// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: QZYU2P-IDkxx
import * as React from "react";
import {
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  initializeCodeComponentStates,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import Checkbox from "../../Checkbox"; // plasmic-import: D2DzRkcO7hL6/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import * as sty from "./PlasmicLoginFormPopup.module.css"; // plasmic-import: QZYU2P-IDkxx/css

createPlasmicElementProxy;

export const PlasmicLoginFormPopup__VariantProps = new Array();

export const PlasmicLoginFormPopup__ArgProps = new Array(
  "plasmicAntd5FormValue",
  "onPlasmicAntd5FormValueChange",
  "unblurPopUp",
  "onUnblurPopUpChange"
);

const $$ = {};

function PlasmicLoginFormPopup__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "writable",
        variableType: "object",
        valueProp: "plasmicAntd5FormValue",
        onChangeProp: "onPlasmicAntd5FormValueChange",
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "checkbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "unblurPopUp",
        type: "writable",
        variableType: "boolean",
        valueProp: "unblurPopUp",
        onChangeProp: "onUnblurPopUpChange"
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  return (() => {
    const child$Props = {
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.form
      ),
      extendedOnValuesChange: generateStateOnChangePropForCodeComponents(
        $state,
        "value",
        ["form", "value"],
        FormWrapper_Helpers
      ),
      formItems: [
        { label: "Name", name: "name", inputType: "Text" },
        { label: "Message", name: "message", inputType: "Text Area" }
      ],

      labelCol: { span: 8, horizontalOnly: true },
      layout: "vertical",
      mode: "advanced",
      onFinish: async values => {
        const $steps = {};
        $steps["runActionOnForm"] = true
          ? (() => {
              const actionArgs = { tplRef: "form", action: "setFieldsValue" };
              return (({ tplRef, action, args }) => {
                return $refs?.[tplRef]?.[action]?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runActionOnForm"] != null &&
          typeof $steps["runActionOnForm"] === "object" &&
          typeof $steps["runActionOnForm"].then === "function"
        ) {
          $steps["runActionOnForm"] = await $steps["runActionOnForm"];
        }
      },
      onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
        $state,
        "isSubmitting",
        ["form", "isSubmitting"],
        FormWrapper_Helpers
      ),
      ref: ref => {
        $refs["form"] = ref;
      },
      requiredMark: false,
      submitSlot: null,
      wrapperCol: { span: 16, horizontalOnly: true }
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "form.value"
        },
        {
          name: "isSubmitting",
          plasmicStateName: "form.isSubmitting"
        }
      ],

      [],
      FormWrapper_Helpers ?? {},
      child$Props
    );
    return (
      <FormWrapper
        data-plasmic-name={"form"}
        data-plasmic-override={overrides.form}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      >
        {(() => {
          try {
            return true;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div className={classNames(projectcss.all, sty.freeBox__zjyoD)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kURgv
              )}
            >
              <Trans__>{"HALCYON STUDIOS"}</Trans__>
            </div>
            <FormItemWrapper
              className={classNames("__wab_instance", sty.formField__cLz9T)}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ar03E
                  )}
                >
                  <Trans__>{"Email"}</Trans__>
                </div>
              }
            >
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.input),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["input", "value"],
                    AntdInput_Helpers
                  ),
                  type: "email",
                  value: generateStateValueProp($state, ["input", "value"])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "input.value"
                    }
                  ],

                  [],
                  AntdInput_Helpers ?? {},
                  child$Props
                );
                return (
                  <AntdInput
                    data-plasmic-name={"input"}
                    data-plasmic-override={overrides.input}
                    {...child$Props}
                  />
                );
              })()}
            </FormItemWrapper>
            <FormItemWrapper
              className={classNames("__wab_instance", sty.formField__n4Tgh)}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e5X96
                  )}
                >
                  <Trans__>{"Password"}</Trans__>
                </div>
              }
            >
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.input2),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["input2", "value"],
                    AntdInput_Helpers
                  ),
                  type: "password",
                  value: generateStateValueProp($state, ["input2", "value"])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "input2.value"
                    }
                  ],

                  [],
                  AntdInput_Helpers ?? {},
                  child$Props
                );
                return (
                  <AntdInput
                    data-plasmic-name={"input2"}
                    data-plasmic-override={overrides.input2}
                    {...child$Props}
                  />
                );
              })()}
            </FormItemWrapper>
            <div className={classNames(projectcss.all, sty.freeBox__hkJgh)}>
              <Checkbox
                data-plasmic-name={"checkbox"}
                data-plasmic-override={overrides.checkbox}
                className={classNames("__wab_instance", sty.checkbox)}
                isChecked={
                  generateStateValueProp($state, ["checkbox", "isChecked"]) ??
                  false
                }
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["checkbox", "isChecked"])(
                    eventArgs[0]
                  );
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rpKxk
                  )}
                >
                  <Trans__>{"Remember Me"}</Trans__>
                </div>
              </Checkbox>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2Y4Gw
                )}
              >
                <Trans__>{"Forgot Password"}</Trans__>
              </div>
            </div>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"unnamedVariant"}
              onClick={async event => {
                const $steps = {};
                $steps["updateUnblurPopUp"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["unblurPopUp"]
                        },
                        operation: 4,
                        value: ($state.unblurPopUp = false)
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateUnblurPopUp"] != null &&
                  typeof $steps["updateUnblurPopUp"] === "object" &&
                  typeof $steps["updateUnblurPopUp"].then === "function"
                ) {
                  $steps["updateUnblurPopUp"] = await $steps[
                    "updateUnblurPopUp"
                  ];
                }
                $steps["logIn"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (async ({ continueTo }) => {
                        function uuidv4() {
                          return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                            /[018]/g,
                            c =>
                              (
                                c ^
                                (crypto.getRandomValues(new Uint8Array(1))[0] &
                                  (15 >> (c / 4)))
                              ).toString(16)
                          );
                        }
                        async function sha256(text) {
                          const encoder = new TextEncoder();
                          const data = encoder.encode(text);
                          const hashBuffer = await crypto.subtle.digest(
                            "SHA-256",
                            data
                          );
                          const hashArray = Array.from(
                            new Uint8Array(hashBuffer)
                          );
                          const hashHex = hashArray
                            .map(b => b.toString(16).padStart(2, "0"))
                            .join("");
                          return hashHex;
                        }
                        const state = JSON.stringify({
                          continueTo: continueTo || window.location.href
                        });
                        const code_verifier = uuidv4();
                        localStorage.setItem("code_verifier", code_verifier);
                        const code_challenge = await sha256(code_verifier);
                        const params = new URLSearchParams();
                        params.set("client_id", "2p9VhVhxAWhB5Nusx9QUQ2");
                        params.set("state", state);
                        params.set("response_type", "code");
                        params.set("code_challenge", code_challenge);
                        params.set("code_challenge_method", "S256");
                        params.set("origin_host", window.location.host);
                        if (dataSourcesCtx?.authRedirectUri) {
                          params.set(
                            "redirect_uri",
                            dataSourcesCtx.authRedirectUri
                          );
                        }
                        if (window.__PLASMIC_AUTH_OVERRIDE) {
                          window.__PLASMIC_AUTH_OVERRIDE();
                        } else {
                          const url = `https://studio.plasmic.app/authorize?${params.toString()}`;
                          window.location.assign(url);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["logIn"] != null &&
                  typeof $steps["logIn"] === "object" &&
                  typeof $steps["logIn"].then === "function"
                ) {
                  $steps["logIn"] = await $steps["logIn"];
                }
              }}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j0Msk
                )}
              >
                <Trans__>{"Login"}</Trans__>
              </div>
            </Button>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__w7UNb
              )}
              onClick={async event => {
                const $steps = {};
                $steps["updateUnblurPopUp"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["unblurPopUp"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateUnblurPopUp"] != null &&
                  typeof $steps["updateUnblurPopUp"] === "object" &&
                  typeof $steps["updateUnblurPopUp"].then === "function"
                ) {
                  $steps["updateUnblurPopUp"] = await $steps[
                    "updateUnblurPopUp"
                  ];
                }
              }}
            >
              <Trans__>{"CLOSE"}</Trans__>
            </div>
          </div>
        ) : null}
      </FormWrapper>
    );
  })();
}

const PlasmicDescendants = {
  form: ["form", "input", "input2", "checkbox", "button"],
  input: ["input"],
  input2: ["input2"],
  checkbox: ["checkbox"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginFormPopup__ArgProps,
          internalVariantPropNames: PlasmicLoginFormPopup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginFormPopup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "form") {
    func.displayName = "PlasmicLoginFormPopup";
  } else {
    func.displayName = `PlasmicLoginFormPopup.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginFormPopup = Object.assign(
  // Top-level PlasmicLoginFormPopup renders the root element
  makeNodeComponent("form"),
  {
    // Helper components rendering sub-elements
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    checkbox: makeNodeComponent("checkbox"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicLoginFormPopup
    internalVariantProps: PlasmicLoginFormPopup__VariantProps,
    internalArgProps: PlasmicLoginFormPopup__ArgProps
  }
);

export default PlasmicLoginFormPopup;
/* prettier-ignore-end */
