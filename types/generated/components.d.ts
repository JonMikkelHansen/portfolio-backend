import type { Schema, Struct } from '@strapi/strapi';

export interface ThemeColorSet extends Struct.ComponentSchema {
  collectionName: 'components_theme_color_sets';
  info: {
    displayName: 'Color-set';
    icon: 'brush';
  };
  attributes: {
    Accent: Schema.Attribute.String;
    Primary: Schema.Attribute.String;
    Secondary: Schema.Attribute.String;
    Tertiary: Schema.Attribute.String;
  };
}

export interface ThemeColors extends Struct.ComponentSchema {
  collectionName: 'components_theme_colors';
  info: {
    displayName: 'Colors';
    icon: 'brush';
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

export interface ThemeSpacing extends Struct.ComponentSchema {
  collectionName: 'components_theme_spacings';
  info: {
    displayName: 'Spacing';
    icon: 'connector';
  };
  attributes: {};
}

export interface ThemeTypography extends Struct.ComponentSchema {
  collectionName: 'components_theme_typographies';
  info: {
    displayName: 'Typography';
    icon: 'bold';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'theme.color-set': ThemeColorSet;
      'theme.colors': ThemeColors;
      'theme.layout': ThemeLayout;
      'theme.spacing': ThemeSpacing;
      'theme.typography': ThemeTypography;
    }
  }
}
