import type { Meta, StoryObj } from '@storybook/react';

import OpenInNewOutlined from '../../lib/action/OpenInNewOutlined';

const meta: Meta<typeof OpenInNewOutlined> = {
  component: OpenInNewOutlined,
  tags: ['autodocs'],
  title: 'action/OpenInNewOutlined',
};

export default meta;
type Story = StoryObj<typeof OpenInNewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
