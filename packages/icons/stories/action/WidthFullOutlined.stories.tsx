import type { Meta, StoryObj } from '@storybook/react';

import WidthFullOutlined from '../../lib/action/WidthFullOutlined';

const meta: Meta<typeof WidthFullOutlined> = {
  component: WidthFullOutlined,
  tags: ['autodocs'],
  title: 'action/WidthFullOutlined',
};

export default meta;
type Story = StoryObj<typeof WidthFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
