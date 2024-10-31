import type { Struct, Schema } from '@strapi/strapi';

export interface ThemeTypography extends Struct.ComponentSchema {
  collectionName: 'components_theme_typographies';
  info: {
    displayName: 'Typography';
    icon: 'bold';
  };
  attributes: {};
}

export interface ThemeSpacing extends Struct.ComponentSchema {
  collectionName: 'components_theme_spacings';
  info: {
    displayName: 'Spacing';
    icon: 'connector';
  };
  attributes: {};
}

export interface ThemeLayout extends Struct.ComponentSchema {
  collectionName: 'components_theme_layouts';
  info: {
    displayName: 'Layout';
    icon: 'dashboard';
  };
  attributes: {};
}

export interface ThemeColors extends Struct.ComponentSchema {
  collectionName: 'components_theme_colors';
  info: {
    displayName: 'Colors';
    icon: 'brush';
  };
  attributes: {};
}

export interface ThemeColorSet extends Struct.ComponentSchema {
  collectionName: 'components_theme_color_sets';
  info: {
    displayName: 'Color-set';
    icon: 'brush';
  };
  attributes: {
    Primary: Schema.Attribute.String;
    Secondary: Schema.Attribute.String;
    Tertiary: Schema.Attribute.String;
    Accent: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'theme.typography': ThemeTypography;
      'theme.spacing': ThemeSpacing;
      'theme.layout': ThemeLayout;
      'theme.colors': ThemeColors;
      'theme.color-set': ThemeColorSet;
    }
  }
}
