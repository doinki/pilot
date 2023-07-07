import type { Meta, StoryObj } from '@storybook/react';

import HorizontalRuleOutlined from '../../lib/editor/HorizontalRuleOutlined';

const meta: Meta<typeof HorizontalRuleOutlined> = {
  component: HorizontalRuleOutlined,
  tags: ['autodocs'],
  title: 'editor/HorizontalRuleOutlined',
};

export default meta;
type Story = StoryObj<typeof HorizontalRuleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
