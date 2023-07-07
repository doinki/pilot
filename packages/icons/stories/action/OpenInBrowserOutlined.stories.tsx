import type { Meta, StoryObj } from '@storybook/react';

import OpenInBrowserOutlined from '../../lib/action/OpenInBrowserOutlined';

const meta: Meta<typeof OpenInBrowserOutlined> = {
  component: OpenInBrowserOutlined,
  tags: ['autodocs'],
  title: 'action/OpenInBrowserOutlined',
};

export default meta;
type Story = StoryObj<typeof OpenInBrowserOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
