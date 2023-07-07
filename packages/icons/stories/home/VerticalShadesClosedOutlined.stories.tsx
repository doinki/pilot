import type { Meta, StoryObj } from '@storybook/react';

import VerticalShadesClosedOutlined from '../../lib/home/VerticalShadesClosedOutlined';

const meta: Meta<typeof VerticalShadesClosedOutlined> = {
  component: VerticalShadesClosedOutlined,
  tags: ['autodocs'],
  title: 'home/VerticalShadesClosedOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalShadesClosedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
