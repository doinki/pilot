import type { Meta, StoryObj } from '@storybook/react';

import CoPresentOutlined from '../../lib/communication/CoPresentOutlined';

const meta: Meta<typeof CoPresentOutlined> = {
  component: CoPresentOutlined,
  tags: ['autodocs'],
  title: 'communication/CoPresentOutlined',
};

export default meta;
type Story = StoryObj<typeof CoPresentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
