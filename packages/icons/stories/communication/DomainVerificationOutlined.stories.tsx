import type { Meta, StoryObj } from '@storybook/react';

import DomainVerificationOutlined from '../../lib/communication/DomainVerificationOutlined';

const meta: Meta<typeof DomainVerificationOutlined> = {
  component: DomainVerificationOutlined,
  tags: ['autodocs'],
  title: 'communication/DomainVerificationOutlined',
};

export default meta;
type Story = StoryObj<typeof DomainVerificationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
