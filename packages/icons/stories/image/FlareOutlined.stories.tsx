import type { Meta, StoryObj } from '@storybook/react';

import FlareOutlined from '../../lib/image/FlareOutlined';

const meta: Meta<typeof FlareOutlined> = {
  component: FlareOutlined,
  tags: ['autodocs'],
  title: 'image/FlareOutlined',
};

export default meta;
type Story = StoryObj<typeof FlareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
