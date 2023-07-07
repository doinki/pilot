import type { Meta, StoryObj } from '@storybook/react';

import CancelPresentationOutlined from '../../lib/communication/CancelPresentationOutlined';

const meta: Meta<typeof CancelPresentationOutlined> = {
  component: CancelPresentationOutlined,
  tags: ['autodocs'],
  title: 'communication/CancelPresentationOutlined',
};

export default meta;
type Story = StoryObj<typeof CancelPresentationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
