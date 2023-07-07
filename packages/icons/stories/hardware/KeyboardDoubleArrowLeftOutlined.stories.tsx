import type { Meta, StoryObj } from '@storybook/react';

import KeyboardDoubleArrowLeftOutlined from '../../lib/hardware/KeyboardDoubleArrowLeftOutlined';

const meta: Meta<typeof KeyboardDoubleArrowLeftOutlined> = {
  component: KeyboardDoubleArrowLeftOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardDoubleArrowLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardDoubleArrowLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
