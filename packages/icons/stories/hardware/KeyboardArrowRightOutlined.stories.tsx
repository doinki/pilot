import type { Meta, StoryObj } from '@storybook/react';

import KeyboardArrowRightOutlined from '../../lib/hardware/KeyboardArrowRightOutlined';

const meta: Meta<typeof KeyboardArrowRightOutlined> = {
  component: KeyboardArrowRightOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardArrowRightOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardArrowRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
