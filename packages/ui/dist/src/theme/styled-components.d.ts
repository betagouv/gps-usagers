import * as styledComponents from "styled-components";
import { ITheme } from ".";
declare const styled: styledComponents.ThemedBaseStyledInterface<ITheme>, css: styledComponents.BaseThemedCssFunction<ITheme>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ITheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ITheme>>[]) => styledComponents.GlobalStyleComponent<P, ITheme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ITheme, ITheme>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider, styled };
export default styled;
export declare const GlobalStyle: styledComponents.GlobalStyleComponent<{}, ITheme>;
