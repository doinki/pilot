import type { Meta, StoryObj } from '@storybook/react';

import AutoAwesomeMotionOutlined from '../../lib/image/AutoAwesomeMotionOutlined';

const meta: Meta<typeof AutoAwesomeMotionOutlined> = {
  component: AutoAwesomeMotionOutlined,
  tags: ['autodocs'],
  title: 'image/AutoAwesomeMotionOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoAwesomeMotionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
