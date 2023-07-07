import type { Meta, StoryObj } from '@storybook/react';

import AspectRatioOutlined from '../../lib/action/AspectRatioOutlined';

const meta: Meta<typeof AspectRatioOutlined> = {
  component: AspectRatioOutlined,
  tags: ['autodocs'],
  title: 'action/AspectRatioOutlined',
};

export default meta;
type Story = StoryObj<typeof AspectRatioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
