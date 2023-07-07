import type { Meta, StoryObj } from '@storybook/react';

import DnsOutlined from '../../lib/action/DnsOutlined';

const meta: Meta<typeof DnsOutlined> = {
  component: DnsOutlined,
  tags: ['autodocs'],
  title: 'action/DnsOutlined',
};

export default meta;
type Story = StoryObj<typeof DnsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
