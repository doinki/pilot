import type { Meta, StoryObj } from '@storybook/react';

import CssOutlined from '../../lib/action/CssOutlined';

const meta: Meta<typeof CssOutlined> = {
  component: CssOutlined,
  tags: ['autodocs'],
  title: 'action/CssOutlined',
};

export default meta;
type Story = StoryObj<typeof CssOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
