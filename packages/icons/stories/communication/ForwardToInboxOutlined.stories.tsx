import type { Meta, StoryObj } from '@storybook/react';

import ForwardToInboxOutlined from '../../lib/communication/ForwardToInboxOutlined';

const meta: Meta<typeof ForwardToInboxOutlined> = {
  component: ForwardToInboxOutlined,
  tags: ['autodocs'],
  title: 'communication/ForwardToInboxOutlined',
};

export default meta;
type Story = StoryObj<typeof ForwardToInboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
