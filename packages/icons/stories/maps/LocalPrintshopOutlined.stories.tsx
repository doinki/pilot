import type { Meta, StoryObj } from '@storybook/react';

import LocalPrintshopOutlined from '../../lib/maps/LocalPrintshopOutlined';

const meta: Meta<typeof LocalPrintshopOutlined> = {
  component: LocalPrintshopOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPrintshopOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPrintshopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
