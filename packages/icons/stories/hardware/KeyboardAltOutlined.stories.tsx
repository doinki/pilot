import type { Meta, StoryObj } from '@storybook/react';

import KeyboardAltOutlined from '../../lib/hardware/KeyboardAltOutlined';

const meta: Meta<typeof KeyboardAltOutlined> = {
  component: KeyboardAltOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardAltOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
