import type { Meta, StoryObj } from '@storybook/react';

import HideSourceOutlined from '../../lib/action/HideSourceOutlined';

const meta: Meta<typeof HideSourceOutlined> = {
  component: HideSourceOutlined,
  tags: ['autodocs'],
  title: 'action/HideSourceOutlined',
};

export default meta;
type Story = StoryObj<typeof HideSourceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
