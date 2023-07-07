import type { Meta, StoryObj } from '@storybook/react';

import KeyboardDoubleArrowRightOutlined from '../../lib/hardware/KeyboardDoubleArrowRightOutlined';

const meta: Meta<typeof KeyboardDoubleArrowRightOutlined> = {
  component: KeyboardDoubleArrowRightOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardDoubleArrowRightOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardDoubleArrowRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
