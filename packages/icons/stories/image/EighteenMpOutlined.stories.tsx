import type { Meta, StoryObj } from '@storybook/react';

import EighteenMpOutlined from '../../lib/image/EighteenMpOutlined';

const meta: Meta<typeof EighteenMpOutlined> = {
  component: EighteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/EighteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof EighteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
