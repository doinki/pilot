import type { Meta, StoryObj } from '@storybook/react';

import PausePresentationOutlined from '../../lib/communication/PausePresentationOutlined';

const meta: Meta<typeof PausePresentationOutlined> = {
  component: PausePresentationOutlined,
  tags: ['autodocs'],
  title: 'communication/PausePresentationOutlined',
};

export default meta;
type Story = StoryObj<typeof PausePresentationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
