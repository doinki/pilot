import type { Meta, StoryObj } from '@storybook/react';

import VerticalShadesOutlined from '../../lib/home/VerticalShadesOutlined';

const meta: Meta<typeof VerticalShadesOutlined> = {
  component: VerticalShadesOutlined,
  tags: ['autodocs'],
  title: 'home/VerticalShadesOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalShadesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
