import type { Meta, StoryObj } from '@storybook/react';

import KeyboardArrowLeftOutlined from '../../lib/hardware/KeyboardArrowLeftOutlined';

const meta: Meta<typeof KeyboardArrowLeftOutlined> = {
  component: KeyboardArrowLeftOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardArrowLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardArrowLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
