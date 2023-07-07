import type { Meta, StoryObj } from '@storybook/react';

import PrintDisabledOutlined from '../../lib/communication/PrintDisabledOutlined';

const meta: Meta<typeof PrintDisabledOutlined> = {
  component: PrintDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/PrintDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof PrintDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
