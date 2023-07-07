import type { Meta, StoryObj } from '@storybook/react';

import ToggleOnOutlined from '../../lib/toggle/ToggleOnOutlined';

const meta: Meta<typeof ToggleOnOutlined> = {
  component: ToggleOnOutlined,
  tags: ['autodocs'],
  title: 'toggle/ToggleOnOutlined',
};

export default meta;
type Story = StoryObj<typeof ToggleOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
