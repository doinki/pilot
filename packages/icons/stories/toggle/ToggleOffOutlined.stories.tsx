import type { Meta, StoryObj } from '@storybook/react';

import ToggleOffOutlined from '../../lib/toggle/ToggleOffOutlined';

const meta: Meta<typeof ToggleOffOutlined> = {
  component: ToggleOffOutlined,
  tags: ['autodocs'],
  title: 'toggle/ToggleOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ToggleOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
