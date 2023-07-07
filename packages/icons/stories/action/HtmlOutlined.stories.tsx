import type { Meta, StoryObj } from '@storybook/react';

import HtmlOutlined from '../../lib/action/HtmlOutlined';

const meta: Meta<typeof HtmlOutlined> = {
  component: HtmlOutlined,
  tags: ['autodocs'],
  title: 'action/HtmlOutlined',
};

export default meta;
type Story = StoryObj<typeof HtmlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
