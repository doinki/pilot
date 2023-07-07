import type { Meta, StoryObj } from '@storybook/react';

import DomainDisabledOutlined from '../../lib/communication/DomainDisabledOutlined';

const meta: Meta<typeof DomainDisabledOutlined> = {
  component: DomainDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/DomainDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof DomainDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
