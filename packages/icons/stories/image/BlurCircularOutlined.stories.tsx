import type { Meta, StoryObj } from '@storybook/react';

import BlurCircularOutlined from '../../lib/image/BlurCircularOutlined';

const meta: Meta<typeof BlurCircularOutlined> = {
  component: BlurCircularOutlined,
  tags: ['autodocs'],
  title: 'image/BlurCircularOutlined',
};

export default meta;
type Story = StoryObj<typeof BlurCircularOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
